import InputField from "@/components/form/input.form";
import TextAreaField from "@/components/form/text-area.component";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import MainLayout from "../../components/layout";

const page = () => {
  return (
    <>
      <div className="px-4 py-6 md:px-6 md:py-12 lg:py-16 mb-12">
        <article className="prose prose-gray max-w-3xl mx-auto space-y-2 dark:prose-invert">
          <div className="space-y-2 not-prose">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
              Taxing Laughter: The Joke Tax Chronicles
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Posted on August 24, 2023
            </p>
          </div>
          <p>
            Once upon a time, in a far-off land, there was a very lazy king who
            spent all day lounging on his throne. One day, his advisors came to
            him with a problem: the kingdom was running out of money.
          </p>
          <p>
            Jokester began sneaking into the castle in the middle of the night
            and leaving jokes all over the place: under the king's pillow, in
            his soup, even in the royal toilet. The king was furious, but he
            couldn't seem to stop Jokester.
          </p>
          <p>
            And then, one day, the people of the kingdom discovered that the
            jokes left by Jokester were so funny that they couldn't help but
            laugh. And once they started laughing, they couldn't stop.
          </p>
          <figure className="lg:-mx-12 xl:-mx-20">
            <img
              alt="Cover image"
              className="aspect-video overflow-hidden rounded-lg object-cover"
              height={340}
              src="/placeholder.svg"
              width={1250}
            />
            <figcaption className="text-center">
              Image caption goes here
            </figcaption>
          </figure>
          <p>
            The king thought long and hard, and finally came up with
            <a href="/">a brilliant plan</a>: he would tax the jokes in the
            kingdom.
          </p>
          <blockquote>
            “After all,” he said, “everyone enjoys a good joke, so it's only
            fair that they should pay for the privilege.”
          </blockquote>
          <h3>The Joke Tax</h3>
          <p>
            The king's subjects were not amused. They grumbled and complained,
            but the king was firm:
          </p>
          <ul>
            <li>1st level of puns: 5 gold coins</li>
            <li>2nd level of jokes: 10 gold coins</li>
            <li>3rd level of one-liners : 20 gold coins</li>
          </ul>
          <p>
            As a result, people stopped telling jokes, and the kingdom fell into
            a gloom. But there was one person who refused to let the king's
            foolishness get him down: a court jester named Jokester.
          </p>
        </article>
      </div>
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="px-4 py-6 md:px-6 md:py-12">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight">
              Enjoying the Read?
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              Sign up for our newsletter to receive more articles like this one.
            </p>
            <form className="grid md:grid-cols-[2fr_1fr] gap-4">
              <InputField
                placeholder="Enter your email"
                type="email"
                name="email"
              />
              <Button className="w-full rounded-md dark:bg-white dark:text-black text-white py-0.5">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
      <div className="px-4 py-6 md:px-6 md:py-12 mb-12">
        <div className="max-w-3xl mx-auto space-y-6">
          <h3 className="text-2xl font-extrabold tracking-tight">
            What do you think?
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            Enter your comment below. We welcome thoughtful responses and
            spirited discussion. Note that your comment must be approved by our
            moderator before it appears on the site.
          </p>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <InputField
                placeholder="Name"
                name="name"
                type="text"
                label="Name"
              />
              <InputField
                placeholder="Email"
                type="email"
                name="email"
                label="Email"
              />
            </div>
            <TextAreaField
              placeholder="Your comment"
              label="Comment"
              name="comment"
            />
            <div className="text-center">
              <Button className="w-full rounded-md dark:bg-white dark:text-black text-white py-0.5">
                Post Comment
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default page;

function HomeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}
