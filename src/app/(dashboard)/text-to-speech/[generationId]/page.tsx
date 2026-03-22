import { TextToSpeechDetailView } from "@/features/text-to-speech/views/text-to-speech-detail-view";
import { prefetch, trpc, HydrateClient } from "@/trpc/server";
import React from "react";

const Page = async ({
  params,
}: {
  params: Promise<{ generationId: string }>;
}) => {
  const { generationId } = await params;

  prefetch(trpc.generations.getById.queryOptions({ id: generationId }));
  prefetch(trpc.voices.getAll.queryOptions());

  return (
    <HydrateClient>
      <TextToSpeechDetailView generationId={generationId} />
    </HydrateClient>
  );
};

export default Page;
