import { FaPlay } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AnimeInfoTypeProps, GetAnimeEpisodes } from "@/types";
import { useState } from "react";


const AnimeInfo = ({ data, episode, description } : { data: AnimeInfoTypeProps, episode: GetAnimeEpisodes, description: string }) => {
  const [isShowMore, setIsShowMore] = useState<boolean>(false);

  return (
    <div className="flex max-w-[1420px] mx-auto w-full h-auto px-4 py-10 relative">
        <div className="flex lg:flex-row flex-col items-center lg:items-start gap-x-4 h-auto w-full">
            <div className="relative h-80 mb-6 lg:mb-0 w-52 lg:min-w-64 overflow-hidden rounded-md before:absolute before:w-full before:bg-gradient-to-t before:from-stone-950 before:to-transparent before:h-32 before:bottom-0 before:left-0 before:z-20">
              <Image
                src={data?.anime.info.poster}
                alt={"anime poster"}
                fill
                className=" w-full h-full object-cover"
              />
            </div>

          <div className="">
            <h1 className="text-3xl font-semibold">{data?.anime.info.name}</h1>

            <div className="rounded-sm my-4 items-center flex gap-px overflow-hidden">
              <p className="bg-white text-black py-1 font-semibold px-2 text-xs">
                {data?.anime.info.stats.rating}
              </p>

              <p className="bg-rose-700 font-semibold py-1 px-2 text-xs">
                CC: {data?.anime.info.stats.episodes.sub}
              </p>

              <p className="bg-yellow-500 font-semibold py-1 px-2 text-xs">
                {data?.anime.info.stats.quality}
              </p>
              <p className="bg-yellow-500 font-semibold py-1 px-2 text-xs">
                {data?.anime.info.stats.episodes.sub}
              </p>

              <span className="h-1.5 mx-2 w-1.5 rounded-full bg-muted-foreground"></span>

              <p className="text-sm">{data?.anime.info.stats.type}</p>

              <span className="h-1.5 mx-2 w-1.5 rounded-full bg-muted-foreground"></span>

              <p className="text-sm">{data?.anime.info.stats.duration}</p>
            </div>

            <div className="flex my-4">
              <Button
                asChild
                className="bg-rose-600 rounded-full hover:bg-rose-700"
              >
                <a href={`/watch/${episode?.episodes[0].episodeId}`}>
                  <FaPlay className="mr-2" /> Watch now
                </a>
              </Button>
            </div>

            {/* Description here! */}

            <p className="text-slate-50 text-sm">
              {description?.length! > 300
                ? isShowMore
                  ? description
                  : description?.slice(0, 300)
                : description}
              <span
                className="ml-2 font-semibold cursor-pointer select-none"
                onClick={() => setIsShowMore(!isShowMore)}
              >
                {isShowMore ? "- less" : "+ more"}
              </span>
            </p>

            <div className="my-3">
              <p className="text-muted-foreground text-sm">
                AniFire is a website to watch the animes for free and event
                ads-free. My main motive was to make a full functionable website
                to showcase in my portfolio i have no intentions to make any
                type of revenew from this.
              </p>
            </div>
          </div>
        
        {/* More info's */}
          <div className="lg:max-w-96 w-full flex-shrink-0 flex flex-col text-sm bg-white/10 p-6 backdrop-blur-md gap-4 justify-center lg:h-full">
              <p>
                <span className="font-medium">Japanese:</span>{" "}{data?.anime.moreInfo.japanese}
              </p>
              <p>
                <span className="font-medium">Synonyms:</span>{" "}{data?.anime.moreInfo.synonyms}
              </p>
              <p>
                <span className="font-medium">Aired:</span>{" "}{data?.anime.moreInfo.aired}
              </p>
              <p>
                <span className="font-medium">Premiered:</span>{" "}{data?.anime.moreInfo.premiered}
              </p>
              <p>
                <span className="font-medium">Duration:</span>{" "}{data?.anime.moreInfo.duration}
              </p>
              <p>
                <span className="font-medium">Status:</span>{" "}{data?.anime.moreInfo.status}
              </p>
          </div>
        </div>
      </div>
  )
}
export default AnimeInfo