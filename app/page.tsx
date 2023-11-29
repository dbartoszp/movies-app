"use client";
import "./globals.css";
import { HomepageBanner } from "@/modules/HomepageBanner/HomepageBanner";
import { Link } from "@/modules/ui/Button/Link";
import { Text } from "@/modules/Text/Text";

export default function Home() {
  return (
    <>
      <div>
        <HomepageBanner />
        <div className="flex justify-center mt-12">
          <Link variant="green" size="lg" href="/account">
            <Text>Create an account now!</Text>
          </Link>
        </div>
      </div>
    </>
  );
}
