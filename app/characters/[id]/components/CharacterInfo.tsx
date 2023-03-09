import classNames from 'classnames';

export const CharacterInfo = (character: Character) => {
  const { species, gender, status, location } = character;

  const statusStyle = status.toLowerCase() == 'alive' ? 'bg-green-600' : 'bg-red-600';

  return (
    <ul className={'ml-7 flex flex-col [&_li]:text-slate-200 [&_li]:text-[20px] [&_li]:mb-2'}>
      <li>
        <span className={classNames(statusStyle, 'h-3 w-3 inline-block rounded-[50%] mr-2')} />
        {character.status.toUpperCase()}
      </li>
      <li className={'mt-3'}>
        Species: <span className={'text-[hsl(280,100%,70%)]'}>{species}</span>
      </li>
      <li>
        Gender: <span className={'text-[hsl(280,100%,70%)]'}>{gender}</span>
      </li>
      <li>
        Location: <span className={'text-[hsl(280,100%,70%)]'}>{location.name}</span>
      </li>
    </ul>
  );
};
