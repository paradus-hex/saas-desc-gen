'use client';

import InputForms from '@/components/InputForms';
import { useChat } from 'ai/react';
import { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Chat() {
  const [result, setResult] = useState<string | null>(null);

  const { messages, append, isLoading, setMessages } = useChat({
    onFinish: (message) => {
      setResult(message.content);
    },
  });

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          {"AI app for Realtors"}
        </h1>
        <p className="text-lg text-muted-foreground">
          Just put on the details and get started
        </p>
      </div>

      <InputForms
        handleSubmit={(message: string) => {
          setMessages([]);
          append({ role: "user", content: message });
        }}
        isLoading={isLoading}
      />

      {messages[1]?.content && (
        <Card>
          <CardHeader className="items-center">
            <CardTitle>Response</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-800">
              {messages[1].content.split("\n").map((line) => {
                return <p>{line}</p>;
              })}
            </p>
          </CardContent>
        </Card>
      )}
    </section>
  );
}
