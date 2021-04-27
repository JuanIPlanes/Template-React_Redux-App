import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useRef } from "react";

import * as actionsCreators from "../redux/action";

import Form from "../Components/NewComponent";

const App = ({ recipe, loading, recivedRecipe: RR, getRecipe, setRecipe }) => {
  let lareff = useRef(),
    HC = (e) => setRecipe(e.target.value),
    HC2 = () => RR(lareff.current.value),
    HC3 = () => getRecipe();
  return (
    <>
      <div className="App">
        <Form
          recipe={recipe.value}
          loading={loading}
          lareff={lareff}
          HC={HC}
          Input
        />
        <button onClick={HC2}>+1</button>
        <button onClick={HC3}>-1</button>
      </div>
    </>
  );
};

const mapStateToProps = ({ loading, recipe, msg }) => {
  return {
    loading: loading,
    recipe: recipe,
    msg: msg
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionsCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
