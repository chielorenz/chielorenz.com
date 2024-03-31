import Image from "next/image";
import avatarPic from "@/app/avatar.webp";
import Button from "@/components/Button";
import type { PostMeta } from "@/app/api/posts/route";
import { format } from "@/lib/date";

export default async function Home() {
	const res = await fetch("http://localhost:3000/api/posts");
	const postsMeta: PostMeta[] = (await res.json()).splice(0, 4);

	const posts = [];
	let foundFirst = false;
	for (const postMeta of postsMeta) {
		const time = format(postMeta.timestamp);

		posts.push(
			<a
				href={postMeta.href}
				key={postMeta.href}
				className={`text-shark-300 hover:no-underline relative flex flex-col justify-end rounded-2xl p-8 bg-shark-950 hover:bg-shark-900 ${
					foundFirst ? "" : "row-span-2"
				}`}
			>
				<Image
					src={"/" + postMeta.cover}
					alt="Post cover"
					fill
					sizes="100vw"
					placeholder="blur"
					blurDataURL={postMeta.placeholder}
					className="object-cover rounded-2xl opacity-10"
				/>
				<span className="font-bold">{time}</span>
				<p className="mt-2 text-xl font-bold text-shark-50">{postMeta.title}</p>
				<p className={`mt-2 ${foundFirst ? "line-clamp-2" : "line-clamp-4"}`}>
					{postMeta.excerpt}
				</p>
			</a>
		);
		foundFirst = true;
	}

	posts.push(
		// This button needs to be rounded-2xl
		<Button key="blog" href="/blog">
			<span className="text-xl">See more posts</span>
		</Button>
	);

	return (
		<div className="h-screen bg-havelock-500">
			<div className="h-screen p-8">
				<div className="h-full bg-shark-950 rounded-2xl flex">
					<div className="w-full max-w-screen-xl m-auto flex justify-evenly items-center">
						<div className="text-lg leading-8">
							<p>Hello, my name is</p>
							<h1 className="font-bold text-5xl text-havelock-500 mt-3">
								Luca Lorenzini
							</h1>
							<p className="mt-3">
								Web developer working full-time{" "}
								<a href="https://wethod.com">@wethod</a> and on many{" "}
								<a href="https://github.com/chielorenz">side projects</a>
							</p>
							<p>
								DIY supporter and{" "}
								<a href="https://undiscover.it">music enthusiast</a>. My
								internet handler is “chielorenz”
							</p>
							<div className="mt-8 flex space-x-2">
								<Button label="Blog" href="/blog" />
								{/* <Button label="Works" /> */}
								{/* <Button label="Music" href="https://undiscover.it" /> */}
							</div>
						</div>
						{/* Add custom placeholder image because the avatar has transparent background: <placeholder="blur"
					blurDataURL={string}> */}
						<Image src={avatarPic} height={260} alt="Author avatar" />
					</div>
				</div>
				{/* <div className="m-auto max-w-screen-xl mt-32 mb-16">
				<h1 className="font-bold text-lg">Latest posts</h1>
				<div className="mt-8 grid grid-cols-3 grid-rows-[180px_180px] gap-6">
					{posts}
				</div>
			</div> */}
			</div>
		</div>
	);
}
