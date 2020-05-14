import React from "react";
import Container from "@material-ui/core/Container";
import Books from "./Books";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import FilterContainer from "../containers/FilterContainer";
import MenuContainer from "./../containers/MenuContainer";

class App extends React.Component {
  componentDidMount = () => {
    axios.get("/books.json").then(({ data }) => {
      this.props.setBooks(data);
    });
  };
  render() {
    const { books, isReady } = this.props;

    return (
      <div className="App">
        <Container maxWidth="lg">
          <MenuContainer />
          <FilterContainer />

          <Grid container spacing={3}>
            {!isReady
              ? "Загрузка..."
              : books.map((book, i) => (
                  <Grid item xs={12} md={3} sm={6}>
                    {" "}
                    <Books key={i} {...book} />{" "}
                  </Grid>
                ))}
          </Grid>
        </Container>
      </div>
    );
  }
}

export default App;
