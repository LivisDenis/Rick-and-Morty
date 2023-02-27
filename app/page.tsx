import { caller } from '@/server/routes';
const RootPage = async () => {
    const hello = await caller.hello({text: 'Rick and Morty'});

    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
                Rick <span className="text-[hsl(280,100%,70%)]">and</span> Morty
            </h1>
            <p className="text-2xl text-white">
                {hello.greeting ? hello.greeting : "Loading tRPC query..."}
            </p>
        </main>
    );
};

export default RootPage;
