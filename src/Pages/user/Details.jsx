import { getComment } from "../../api/osintFetch";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import backIcon from "../../assets/back.png";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableRow,
} from "../../Components/ui/table";
const Details = () => {
  const { id } = useParams();
  const [data, setdata] = useState(null);

  function getClassnameForSeverity(severity) {
    switch (severity) {
      case "low":
        return "text-green-600 m-2 font-semibold"; // Düşük ciddiyet için yeşil renk
      case "medium":
        return "text-yellow-600 m-2 font-semibold"; // Orta ciddiyet için sarı renk
      case "high":
        return "text-orange-600 m-2 font-semibold"; // Yüksek ciddiyet için kırmızı renk
      default:
        return "text-red-600 m-2 font-semibold"; // Varsayılan olarak gri renk
    }
  }

  useEffect(() => {
    const fetchComment = async () => {
      const response = await getComment(id);

      const jsonString = response.message.comment.trim(); // Trim unnecessary whitespace
      const jsonObject = JSON.parse(jsonString);
      setdata(jsonObject);
    };
    fetchComment();
  }, [id]);
  return (
    <>
      {data && (
        <Table className="mt-20 w-4/5 mx-auto text-lg">
          <span className=" absolute top-10 left-20">
            <Link to="/user/dashboard">
              <img src={backIcon} alt="back" className="h-10 w-10" />
            </Link>
          </span>
          <TableCaption>Report Details</TableCaption>
          <TableBody>
            <TableRow>
              <TableCell className="font-bold">Report Date</TableCell>
              <TableCell>{data.raport_date.split(" ")[0]}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-bold ">Findings</TableCell>
              <TableCell>
                <ul>
                  {Object.entries(data.findings).map(
                    ([severity, findings], index) => (
                      <li key={index}>
                        {/* Renk sınıfını `getClassnameForSeverity` fonksiyonundan alıyoruz */}
                        <h3 className={getClassnameForSeverity(severity)}>
                          {/* Eğer ciddiyet "none" ise başlığı "None" olarak yazdır */}
                          {severity.charAt(0).toUpperCase() + severity.slice(1)}
                          :
                        </h3>
                        <ul>
                          {findings.map((finding, idx) => (
                            <li key={idx}>{finding}</li>
                          ))}
                        </ul>
                      </li>
                    )
                  )}
                </ul>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-bold">Impact</TableCell>
              <TableCell>{data.impact}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-bold">Recommendations</TableCell>
              <TableCell>
                <ul>
                  {data.recommendations.map((recommendation, index) => (
                    <li key={index}>{recommendation}</li>
                  ))}
                </ul>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-bold">References</TableCell>
              <TableCell>
                <ul>
                  {data.references.map((reference, index) => (
                    <li key={index}>
                      <a
                        href={reference}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {reference}
                      </a>
                    </li>
                  ))}
                </ul>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      )}
    </>
  );
};

export default Details;
