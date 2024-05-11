import { addDoc, collection } from "firebase/firestore";
import { db, storage } from "../firebase";
import { useEffect, useState } from "react";
import { productInputs } from "../formInputs";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import "../styles/add-item.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddItem = () => {
	const [file, setFile] = useState("");
	const [data, setData] = useState({});
	const [per, setPerc] = useState(null);

	useEffect(() => {
		const uploadFile = () => {
			const name = new Date().getTime() + file.name;

			console.log(name);
			const storageRef = ref(storage, file.name);
			const uploadTask = uploadBytesResumable(storageRef, file);

			uploadTask.on(
				"state_changed",
				(snapshot) => {
					const progress =
						(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					console.log("Upload is " + progress + "% done");
					setPerc(progress);
					switch (snapshot.state) {
						case "paused":
							console.log("Upload is paused");
							break;
						case "running":
							console.log("Upload is running");
							break;
						default:
							break;
					}
				},
				(error) => {
					console.log(error);
				},
				() => {
					getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
						setData((prev) => ({ ...prev, img: downloadURL })); // Include image URL in product data
					});
				}
			);
		};
		file && uploadFile();
	}, [file]);

	const handleInput = (e) => {
		const id = e.target.id;
		const value = e.target.value;

		setData({ ...data, [id]: value });
	};
	console.log(data);
	const handleAdd = async (e) => {
		e.preventDefault();
		try {
			const docRef = await addDoc(collection(db, "products"), {
				...data
			});
			console.log("Product added with ID: ", docRef.id);
		} catch (error) {
			console.error("Error adding product: ", error);
		}
	};
	const ItemAdded = () => {
		toast.success("Item Added Successfully", {
			position: "top-right",
			closeOnClick: false
		});
	};
	return (
		<form onSubmit={handleAdd} className="AddItem-form">
			<div className="left">
				<img
					src={
						file
							? URL.createObjectURL(file)
							: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
					}
					alt=""
				/>
				<label htmlFor="file" aria-required>
					Image: <DriveFolderUploadOutlinedIcon className="icon" />
				</label>
			</div>
			<div className="formInput">
				<input
					required
					type="file"
					id="file"
					onChange={(e) => setFile(e.target.files[0])}
					style={{ display: "none" }}
				/>
				{productInputs.map((input) => (
					<div className="formInput" key={input.id} required>
						<label>{input.label}</label>
						<input id={input.id} type={input.type} onChange={handleInput} />
					</div>
				))}
				<button
					disabled={per !== null && per < 100}
					type="submit"
					onClick={ItemAdded}
				>
					Add Product
				</button>
				<ToastContainer closeOnClick={false} />
			</div>
		</form>
	);
};
export default AddItem;
