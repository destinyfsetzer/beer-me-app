import React from "react";
import { Container, Paper } from "@material-ui/core";
// import { NavLink } from "react-router-dom";

const BeerSchool = () => {
  return (
    <Container>
      <Paper style={{ maxHeight: 650, overflow: "auto" }}>
        <div className="beer-school">
          <h2>BEER GUIDE FOR THE NON BEER DRINKER</h2>
          <p>
            Forget all you think you know about beer. Here are five common
            misconceptions I urge you to omit from memory when tasting or even
            considering beers:
          </p>
          <ul>
            <li>
              All stouts are heavy beers that will make you fat and lonely
            </li>
            <li>Lagers are all boring blonde piss-water</li>
            <li> Hoppy = bitter</li>
            <li>Wheat beers all taste like banana</li>
            <li>
              All commercial beers are the golden standard of a beer style and
              all other beers should be measured up to these beer ( Could not be
              more wrong )
            </li>
          </ul>
          <h2>THE TASTE OF BEER</h2>
          <p>
            Now that your have emptied out some space in your brain you have
            room for some new information. For starters, there are three common
            ingredients in beer (in addition to water): yeast, hops and barley.
            The selection and incorporation of each of these ingredients changes
            the balance and flavor profile of a beer. But what does each
            ingredient taste like?
          </p>
          <p>
            <b>Yeast</b> - responsible for fruity, spicy, funky, and even more
            neutral flavors during fermentation.
          </p>
          <p>
            <b>Hops</b> - flower closely related to weed that is soaked in beer
            to produce citrus, tropical, herbal, piney, dank, earthy, and floral
            flavors. Adding hops before fermentation creates bitterness.
          </p>
          <p>
            <b>Barley</b> - the most prominent grain in brewing, brewers use
            barley to create the sugar that yeast turns to alcohol during
            fermentation (think of it like grape juice to wine). Barley also
            contributes grainy flavors like water crackers, bread, toast,
            caramel, dark fruit, chocolate, coffee, etc. Malt is the term for
            barley that is specially prepared for use in the brewhouse.
          </p>
          <h2>SOME KEY BEER TERMS</h2>
          <p>
            In addition to the common ingredients, there are a few other key
            terms you may encounter while perusing a beer menu that are worth
            knowing: ABV, Imperial and IBUs.
          </p>
          <p>
            <b>ABV</b> - Alcohol by volume. Usually listed as a percentage so
            you know how strong a beer is.
          </p>
          <p>
            <b>Imperial</b> - This is used in the name of beers with an abv
            >7.5%. Basically beers that are strong as heck and will knock you
            off your barstool!
          </p>
          <p>
            <b>IBUs</b> - International Bittering Units. Measure of bitterness,
            generally from 0/no bitterness to 100/intensely bitter. There is
            technically no upper limit but you probably have your own personal
            threshold.
          </p>
          <h2>WHAT IS THE DIFFERENCE BETWEEN ALES AND LAGERS?</h2>
          <p>
            The basic difference between these two major beer classifications is
            how they are fermented. Ales are fermented with top-fermenting yeast
            at warm temperatures (60˚–70˚F), and lagers are fermented with
            bottom-fermenting yeast at cold temperatures (35˚–50˚F). Because of
            their warm fermentations, ales can generally ferment and age in a
            relatively short period of time (3-5 weeks). On the other hand,
            lagers take much longer to ferment (up to 6 to 8 weeks) because they
            are cold fermented.
          </p>
          <p>
            The Bottom Line: All beer is either an ale or a lager. This is not
            determined by color, flavor or alcohol strength, but by the
            fermentation technique and yeast used in brewing. While taste does
            not necessarily determine the style, there are some general
            distinctions:
          </p>
          <ul>
            <li>
              Lagers tend to have a crisper, cleaner taste, although other
              ingredients such as malts and hops can be added for flavor.
            </li>
            <li>
              Ales tend to be more full-bodied, sweeter and fruity in taste.
              This has to do with the fermentation processes. The faster, more
              aggressive fermentation of ales produces esters, which cause the
              taste of sweetness.
            </li>
          </ul>
          <p>
            <h5>
              Now that you have some background, onto the
              <a href="/"> BEERS!</a>
            </h5>
          </p>
        </div>
      </Paper>
    </Container>
  );
};

export default BeerSchool;
