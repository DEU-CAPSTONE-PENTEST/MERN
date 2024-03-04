import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { useState } from "react";

const Osint = () => {
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // URL'i kullanarak yapmak istediğiniz işlemleri buraya ekleyebilirsiniz.
    console.log("Gönderilen URL:", url);
  };

  return (
    <section className="mt-16">
      <div className="flex flex-col items-center justify-top mx-auto md:h-screen lg:py-0 ">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            OSINT - Open Source Intelligence
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div>
              <Label
                htmlFor="url"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Enter URL for OSINT:
              </Label>
              <Input
                type="text"
                name="url"
                id="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com"
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Get OSINT
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Osint;
