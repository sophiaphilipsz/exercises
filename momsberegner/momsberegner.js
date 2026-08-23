function beregnMedMoms(beloeb, moms = 25) {
  const beloebMedMoms = beloeb * (1 + moms / 100);
  return beloebMedMoms;
}

const beloebInput = document.querySelector("#beloeb");
const beregnKnap = document.querySelector("#beregn");
const resultat = document.querySelector("#resultat");

beregnKnap.addEventListener("click", () => {
  const beloeb = Number(beloebInput.value);

  if (beloebInput.value === "" || beloeb < 0) {
    resultat.textContent = "Indtast et gyldigt beløb.";
    return;
  }

  const beloebMedMoms = beregnMedMoms(beloeb);
  resultat.textContent = `Beløb med 25% moms: ${beloebMedMoms.toFixed(2)} kr.`;
});