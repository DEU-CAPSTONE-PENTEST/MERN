import { useSelector } from "react-redux";
import pending from "../../assets/pending.svg";
import completed from "../../assets/complated.svg";
import total from "../../assets/total.svg";
import redFinger from "../../assets/redFinger.svg";
import greenFinger from "../../assets/greenFinger.svg";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../Components/ui/table";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "https://www.google.com",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "https://chat.openai.com",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "https://coderspace.io/",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod:
        "https://opportunities.vodafone.com/job/Istanbul-Vodafone-Turkey-Discover-Graduate-Program-2024/1032963501/",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "https://www.deepl.com/",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "https://www.hackerrank.com",
    },
  ];
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <div>
      <div className="w-4/5 mx-auto">
        <p className="p-6 text-xl">
          {userInfo.firstname} {userInfo.lastname}
        </p>
        {/* CARDS */}
        <div className="flex gap-5 mx-auto ">
          <div className="rounded-xl border bg-card text-card-foreground shadow flex p-2 ">
            <div>
              <div className="p-6 w-40 flex flex-row items-center justify-between space-y-0 pb-2">
                <h3 className="tracking-tight text-sm font-medium">
                  Total Osint
                </h3>
              </div>
              <div className="p-6 pt-0 text-xl">14</div>
            </div>
            <div className="grid">
              <img
                src={total}
                className="h-10 w-10 text-muted-foreground my-auto"
              />
            </div>
          </div>
          <div className="rounded-xl border bg-card text-card-foreground shadow flex p-2 ">
            <div>
              <div className="p-6 w-40 flex flex-row items-center justify-between space-y-0 pb-2">
                <h3 className="tracking-tight text-sm font-medium">
                  Pending Osint
                </h3>
              </div>
              <div className="p-6 pt-0 text-xl">2</div>
            </div>
            <div className="grid">
              <img
                src={pending}
                className="h-10 w-10 text-muted-foreground my-auto"
              />
            </div>
          </div>
          <div className="rounded-xl border bg-card text-card-foreground shadow flex p-2">
            <div>
              <div className="p-6 w-40 flex flex-row items-center justify-between space-y-0 pb-2">
                <h3 className="tracking-tight text-sm font-medium">
                  Completed Osint
                </h3>
              </div>
              <div className="p-6 pt-0 text-xl">12</div>
            </div>
            <div className="grid">
              <img
                src={completed}
                className="h-10 w-10 text-muted-foreground my-auto"
              />
            </div>
          </div>
        </div>

        {/* TABLE */}
        <Table className="my-10 ">
          <TableCaption>A list of your url for osint</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Count</TableHead>
              <TableHead>URL</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Details</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{invoice.paymentMethod}</TableCell>
                <TableCell>{invoice.paymentStatus}</TableCell>
                <TableCell className="text-right">
                  {invoice.paymentStatus === "Pending" ? (
                    <div className="flex justify-end">
                      <img
                        src={redFinger}
                        alt="details"
                        className="h-10 w-10 text-muted-foreground my-auto "
                      />
                    </div>
                  ) : (
                    <Link to="/" className="flex justify-end">
                      <img
                        src={greenFinger}
                        alt="details"
                        className="h-10 w-10 text-muted-foreground my-auto "
                      />
                    </Link>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default UserDashboard;
