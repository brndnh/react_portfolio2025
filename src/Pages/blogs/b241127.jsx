import homeHeaderImage from '../../assets/home_header.png'
import Breadcrumbs from "../../components/Breadcrumbs";


function Blog241127() {
    return (
        <>
            <main>
                <div className="container grid">
                    <div className="col-0-sm col-1-md col-2-lg bg-columns">
                    </div>

                    <div className="col-12 col-10-md col-8-lg">
                        <Breadcrumbs /> {/* Breadcrumbs above header */}
                        <section>
                            <img class="header-image" src={homeHeaderImage} alt="" />
                            <h1>Apex Legends is a Bad Game! But Why?</h1>
                            <>
                                <p>As someone who has been playing the battle royale FPS Apex Legends on and off since 2019, there has been a lot of up and down criticism for the quality of the game and how it feels to play. Something that has been on my mind over the past few months after taking a break from the game is — “Why is Apex Legends not a good game to play?” Despite what people on Reddit may tell you, the answer is actually a lot deeper than it seems.</p>

                                <p>Apex Legends, outside of the competitive scene, is a game that completely disregards individual skill. In every possible gamemode the game has to offer, the skill based matchmaking (SBMM) has been cranked so high for the past year, that you are always guaranteed to be forced into playing at maximum performance in public matches. The skill distribution of the player base can be modelled with a bell curve, and in every gamemode that has been introduced, that curve stays the same. For above average or even far above average players, every casual match feels like a high ranked, ruthless game, where players are just generally much better at playing the game than how things used to be. The days of achieving really high performance scores are long gone, and not to mention that you will encounter full stacked teams even if you are queueing by yourself.</p>

                                <p>A rarely discussed problem is the effects SBMM has on the average player — they don't get to have an enjoyable fun experience too. In their lobbies where most players should be around the same skill level, players who improve would most likely win, and good for them! Now they get placed into higher tier lobbies, where they will immediately get put down by players who are generally all better than them. Surprisingly, this is actually not fun, as their legitimate improvement has given them maybe around two rightfully won matches. SBMM ensures that the skill gap between players is kept at a minimum, no matter how much time you spend improving.</p>

                                <p>From the game designer's perspective, this is good because it means everyone gets a similar experience playing the game, no matter their skill level, but the fact is a lot of people, even casual players, don't play games passively, because improvement and getting good is desirable, and everyone wants to always be improving in some way. SBMM takes away the feeling of success from improvement by actively punishing players who do so. The current matchmaking system really only benefits the absolute beginning of the bell curve players who have only played the game for around 30 hours max.</p>

                                <p>In my personal experience, I have two friends who are of gold rank which is considered slightly below average in terms of skill, and we simply cannot enjoy playing casually together. If I play on my main account for a supposedly relaxed game mode, every lobby and matchup puts the two of us against the top percentile skilled players of the game. The only way for us to play together and have some resemblance of fun is if I play ranked on an alternate account, which is not actually a good thing nor is it healthy for the game.</p>

                                <p>Respawn (the company in charge of Apex Legends), has pretty much just messed up the ranking system for 23 seasons (3 months each), which is so impressive you might have to respect it. Just imagine trying to mess up something in 23 different ways yourself. Ranked is a completely different experience compared to competitive, which only hurts the competitive scene since the act of thinking about how the game fundamentally works is completely different between the two. How could an average player understand what professional players are doing without relearning the entire game?</p>

                                <p>What makes everything so frustrating is that the fundamentals and core of Apex Legends is incredible, players have seen how good it can be with old casual matches, and the thrill of a good competitive match, but that potential is endlessly squandered. Even Respawn occasionally shows sparks of brilliance - EVO changes, perks, well designed maps, all incredible changes that proves at least one developer knows what they are doing, yet the end result continuously gets worse.</p>

                                <p>This game isn't some “pick of the month” FPS that will die out from bad fundamentals, this is the opposite— a game lovingly crafted with strong fundamentals bogged down by one bad decision after the other.</p>
                            </>

                        </section>
                    </div>
                </div>

            </main>
        </>
    );
}

export default Blog241127;
