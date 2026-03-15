import { TextToSpeechView } from "@/features/text-to-speech/views/text-to-speech-view";
import { trpc, HydrateClient, prefetch } from "@/trpc/server";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Text to Speech" };

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ text?: string; voiceId?: string }>;
}) => {
  const { text, voiceId } = await searchParams;
  prefetch(trpc.voices.getAll.queryOptions());

  return (
    <HydrateClient>
      <TextToSpeechView initialValues={{ text, voiceId }} />
    </HydrateClient>
  );
};

export default Page;
