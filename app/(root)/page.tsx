import Collection from "@/components/shared/Collection";
import { Button } from "@/components/ui/button";
import { getAllEvents } from "@/lib/actions/event.action";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const events= await getAllEvents({
    query:"",
    category:"",
    page:1,
    limit:6,
  })
  console.log(events);
  
  return (
    < >
      <section className="bg-primary-50 bg-dotted-pattern bg-contain">
        <div className="wrapper grid grid-cols-1 md:grid-cols-2 py-4 md:py-8">
          <div className="flex flex-col gap-8 justify-center">
            <h1 className="h1-bold">The all-in-one platform for <span className="h1-bold text-primary">unforgettable</span> events</h1>
            <p className="p-regular-20 md:p-regular-24">Learn from the best. Network with the brightest. Unlock your potential. Join our global community</p>
            <Button className=" w-full sm:w-fit" size='lg' asChild>
              <Link href={"#events"}>
              Expore Now
              </Link>
            </Button>
          </div>

          <Image
          src="/assets/images/work.png"
          alt="hero hu"
          width={1000}
          height={1000}
          className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>

      </section>

      <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h1 className="h2-bold">Empowering Thousands<br />to Achieve Their Goals</h1>

      <div className="flex w-full flex-col gap-5 md:flex-row">
         search 
         catagory 
        </div>

        <Collection
        data={events?.data}
        emptyTitle="No Events Found"
        emptyStateSubtext="Come back later"
        collectionType="All_Events"
        limit={6}
        page={1}
        totalPages={2}
        />

      </section>
    </>
  );
}
