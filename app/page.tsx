"use client";
import { Text } from "@/modules/Text/Text";
import "./globals.css";
import { Button } from "@/modules/ui/Button/Button";
import { Link } from "@/modules/ui/Button/Link";

export default function Home() {
  const test = console.log("button");
  return (
    <main>
      <Text variant="mainInfo">the lighthouse</Text>
      <Link href="/">Link</Link>
      <Button variant="primary" size="lg" onClick={() => test}>
        <Text variant="mainInfo">Button</Text>
      </Button>
      <Button variant="secondary" size="lg" onClick={() => test}>
        <Text>Button</Text>
      </Button>
      <Button variant="primary" size="lg" onClick={() => test}>
        <Text>Button</Text>
      </Button>
    </main>
  );
}
