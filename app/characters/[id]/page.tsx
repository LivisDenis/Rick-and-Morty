import { caller } from '@/server/routes';

export async function generateStaticParams() {
  const charactersCount = (await caller.getCharactersInfo()).response.count;

  return Array.from({ length: charactersCount }, (_, i) => i + 1).map((id) => ({
    id: id
  }));
}

interface CharacterProps {
  params: {
    id: number;
  };
}
const Character = async ({ params }: CharacterProps) => {
  const { response } = await caller.getCharacter({ params: { id: params.id } });

  return (
    <div>
      <div>{response.id}</div>
      <div>{response.name}</div>
    </div>
  );
};

export default Character;
