import React from "react";
import { Container } from "reactstrap";
import "../../../styles/common-section.css";

// الجزء ده هو اللي بيظهر تحت الهيدر في صفحات التسجيل وبيكون فيه صورة
// تمت اضافتها في الملف الخاص بيه في سي اس اس
const CommonSection = (props) => {
  return (
    <section className="common__section">
      <Container>
        <h2 className="text-white">{props.title}</h2>
      </Container>
    </section>
  );
};

export default CommonSection;
