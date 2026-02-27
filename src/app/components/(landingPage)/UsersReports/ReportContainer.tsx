import { UsersReportType } from "@/app/utils/usersReport";
import style from "./UsersReports.module.css";
export default function ReportContainer({
  report,
}: {
  report: UsersReportType;
}) {
  return (
    <div className={style.reportContainer}>
      <div className={style.header}>
        <div className={style.img}>
          <div className={style.imgSimulator} style={{ backgroundImage: `url(${report.avatarUrl})` }}></div>
        </div>
        <div className={style.infosContainer}>
          <h3>{report.name}</h3>
          <p>{report.profession}</p>
          <div className={style.starsContainer}>
            {Array.from({ length: report.stars }).map((_, index) => (
              <span key={index} className={style.star}>
                ⭐
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className={style.messageContainer}>
        <p>{report.message}</p>
      </div>
    </div>
  );
}
