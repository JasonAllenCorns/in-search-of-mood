import { Box, Grid, Section } from "@radix-ui/themes";
import SearchFilterPanel from "./SearchFilterPanel";
import SearchFilterCollapsePanel from "./SearchFilterCollapsePanel";
import TempoSliderComponent from "./SearchFormComponents/TempoSliderComponent";

export default async function SearchForm() {
  return (
    <Section
      size="1"
      display="block"
      style={{border: "1px solid green"}}
    >
      <Box p="3">
        <SearchFilterPanel>
          <p>hello</p>
          {/* <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span
              className="Text"
              style={{ color: "white" }}
            >
              @peduarte starred 3 repositories
            </span>
          </div> */}

          {/* visible form fields */}
          <Grid columns="3" gap="3" width="auto">
            <TempoSliderComponent />
          </Grid>
          {/* collapsed form fields - new Client Component */}
          <SearchFilterCollapsePanel>
            <Grid columns="3" gap="3" width="auto">
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>a</div>
              <div>b</div>
              <div>c</div>
            </Grid>
          </SearchFilterCollapsePanel>
        </SearchFilterPanel>
      </Box>
    </Section>
  );
}
