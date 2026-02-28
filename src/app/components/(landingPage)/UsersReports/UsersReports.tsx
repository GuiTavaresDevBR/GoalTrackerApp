"use client";
import { usersReport } from "@/app/utils/usersReport";
import ReportContainer from "./ReportContainer";
import style from "./UsersReports.module.css";
export default function UsersReports() {
  return (
    <div className={style.container}>
      <h2>
        O que nossos <span>usuários</span> dizem ?
      </h2>
      <div className={style.cardsSelection}>
        {usersReport.map((report) => (
          <ReportContainer key={report.id} report={report} />
        ))}
      </div>
    </div>
  );
}
