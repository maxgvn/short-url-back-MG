const box = height => {
  let tab1 = [];
  let tabfinal = "";
  height = Number(height);

  for (let i = 0; i < height; i++) {
    space = height - i;
    cross = height + (height - i);

    for (let j = 0; j < space; j++) {
      tab1.push(" ");
    }

    for (let j = 0; j < cross; j++) {
      tab1.push("X");
    }

    for (let j = 0; j < cross; j++) {
      tab1.push(" ");
    }

    tab1.push("/n");
  }

  tabfinal = tab1.join();
  console.log(tabfinal);
};
box(process.argv[2]);
