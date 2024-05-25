import {BuildingsGraph} from "../BuildingsGraph"


class Main {
    buildingsGraph;

    constructor() {
        this.buildingsGraph = new BuildingsGraph();

        let btn = document.getElementById("enter-button");
        btn.addEventListener("click", (e) => this.openMainPage());
    }

    openMainPage() {
        const header = (
            <header>
                <h1></h1>
            </header>
        )
        
       const view = document.createElement("div");
       const title = document.createElement("h1");
       title.textContent = "UMDbal";
       view.append(title);

       return view;
    }
  }
  
  new Main();