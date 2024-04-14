import { getComment } from "../../api/osintFetch";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

  useEffect(() => {
    const fetchComment = async () => {
      const response = await getComment(id);
      const rawData = response.message.comment.split("```")[1];
      const splitData = rawData.split("json")[1];
      setdata(JSON.parse(splitData));
    };
    fetchComment();
  }, [id]);
  return (
    <>
      {data && (
        <Table className="m-10 w-4/5 mx-auto">
          <TableCaption>Rapor Detayları</TableCaption>
          <TableBody>
            <TableRow>
              <TableCell className="font-bold">Rapor Tarihi</TableCell>
              <TableCell>{data.rapor_tarihi}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-bold">Giriş</TableCell>
              <TableCell>{data.giris}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-bold">Kullanılan Araçlar</TableCell>
              <TableCell>
                <ul>
                  {data.kullanilan_araclar.map((araclar, index) => (
                    <li key={index}>{araclar}</li>
                  ))}
                </ul>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-bold">Bulgular</TableCell>
              <TableCell>
                {data.bulgular.bilgiler &&
                  data.bulgular.bilgiler.map((bilgi, index) => (
                    <div key={index}>
                      <h3>{bilgi.baslik}</h3>
                      <ul>
                        {bilgi.icerik.map((item, i) => (
                          <li key={i}>
                            Port: {item.port}, Protokol: {item.protokol},
                            Servis: {item.servis}
                            <ul>
                              {item.ek_bilgiler &&
                                item.ek_bilgiler.map((bilgi, j) => (
                                  <li key={j}>{bilgi}</li>
                                ))}
                            </ul>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-bold">Güvenlik Açıkları</TableCell>
              <TableCell>
                <h3>Kritik</h3>
                <ul>
                  {data.guvenlik_aciklari.kritik.length === 0 ? (
                    <li>Yok</li>
                  ) : (
                    data.guvenlik_aciklari.kritik.map((acik, index) => (
                      <li key={index}>
                        {acik.baslik}, Risk Düzeyi: {acik.risk_duzeyi}, Bulgu:{" "}
                        {acik.bulgu}, Sürüm: {acik.surum}, Güncel Sürüm:{" "}
                        {acik.guncel_surum}
                      </li>
                    ))
                  )}
                </ul>
                <h3>Orta</h3>
                <ul>
                  {data.guvenlik_aciklari.orta.length === 0 ? (
                    <li>Yok</li>
                  ) : (
                    data.guvenlik_aciklari.orta.map((acik, index) => (
                      <li key={index}>{acik}</li>
                    ))
                  )}
                </ul>
                <h3>Düşük</h3>
                <ul>
                  {data.guvenlik_aciklari.dusuk.length === 0 ? (
                    <li>Yok</li>
                  ) : (
                    data.guvenlik_aciklari.dusuk.map((acik, index) => (
                      <li key={index}>{acik}</li>
                    ))
                  )}
                </ul>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-bold">Öneriler</TableCell>
              <TableCell>
                <ul>
                  {data.oneriler.map((oneri, index) => (
                    <li key={index}>{oneri}</li>
                  ))}
                </ul>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-bold">Sonuç</TableCell>
              <TableCell>{data.sonuc}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      )}
    </>
  );
};

export default Details;
