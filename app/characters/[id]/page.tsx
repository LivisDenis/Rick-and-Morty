import { caller } from '@/server/routes';
import {Card} from "@/components";

export async function generateStaticParams() {
  const charactersCount = (await caller.getCharactersInfo()).response.count;

  return Array.from({ length: charactersCount }, (_, i) => i + 1).map((id) => ({
    id: id.toString()
  }));
}

interface CharacterProps {
  params: {
    id: string;
  };
}

export const revalidate = 0;
export const dynamic = 'force-static';

const Character = async ({ params }: CharacterProps) => {
  const { response } = await caller.getCharacter({ params: { id: +params.id } });

  return (
      <Card {...response} />
  );
};

export default Character;
