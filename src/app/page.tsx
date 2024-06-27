import Button from "@/components/Button";
import Logo from "@/components/Logo";

export default async function Home() {
	return (
		<div className="h-screen flex">
			<section className="flex flex-col gap-4 mx-auto my-8 px-8 max-w-screen-md">
				<div className="w-full max-w-screen-xl m-auto flex justify-evenly">
					<div className="leading-8">
						<p>Hi, my name is</p>
						<div className="flex gap-4 mt-4 items-center">
							<Logo />
							<h1 className="font-semibold text-3xl">Luca Lorenzini</h1>
						</div>
						<p className="mt-4 [&_a]:link">
							Developer working full-time at{" "}
							<a href="https://wethod.com">wethod</a> and on many{" "}
							<a href="https://github.com/chielorenz">side projects</a>.
						</p>
						<p>
							DIY supporter and{" "}
							<a href="https://undiscover.it" className="link">
								music
							</a>{" "}
							enthusiast. My internet handler is <strong>@chielorenz</strong>.
						</p>
						<div className="mt-4 flex space-x-4">
							<Button label="Blog" href="/blog" />
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
