let raw = [
 {
   "Manufacturer": "Kraken",
   "Model": "Solid Color",
   "Type": "4 Piece",
   "Size": "1\"",
   "Color": "Gray, Violet, Light Blue, Green"
 },
 {
   "Manufacturer": "Kraken",
   "Model": "Solid Color",
   "Type": "4 Piece",
   "Size": "2.2\"",
   "Color": "Gray, Violet, Light Blue, Green"
 },
 {
   "Manufacturer": "Kraken",
   "Model": "Solid Color",
   "Type": "4 Piece",
   "Size": "2.5\"",
   "Color": "Gray, Light Blue, Gold, Green"
 },
 {
   "Manufacturer": "Kraken",
   "Model": "w/ Stash Windows",
   "Type": "4 Piece",
   "Size": "2\"",
   "Color": "Black"
 },
 {
   "Manufacturer": "Kraken",
   "Model": "Diamond Ridge",
   "Type": "4 Piece",
   "Size": "2.2\"",
   "Color": "Gray, Violet, Light Blue, Gold, Green, Red, Black, Silver"
 },
 {
   "Manufacturer": "Kraken",
   "Model": "Diamond Ridge",
   "Type": "4 Piece",
   "Size": "2.5\"",
   "Color": "Gray, Violet, Light Blue, Gold, Green, Red, Black, Silver"
 },
 {
   "Manufacturer": "Kraken",
   "Model": "Tiered",
   "Type": "4 Piece",
   "Size": "2.2\"",
   "Color": "Green, Gold, Violet, Black, Light Blue, Gray, Red"
 },
 {
   "Manufacturer": "Kraken",
   "Model": "Tiered",
   "Type": "4 Piece",
   "Size": "2.5\"",
   "Color": "Green, Gold, Violet, Black, Light Blue, Gray, Red"
 },
 {
   "Manufacturer": "Kraken",
   "Model": "Hex",
   "Type": "4 Piece",
   "Size": "2.2\"",
   "Color": "Blue, Red, Pink, Black, Light Blue, Gold, Green, Violet"
 },
 {
   "Manufacturer": "Kraken",
   "Model": "Hex",
   "Type": "4 Piece",
   "Size": "2.5\"",
   "Color": "Blue, Red, Pink, Black, Light Blue, Gold, Green, Violet"
 },
 {
   "Manufacturer": "Kraken",
   "Model": "w/ Clear Top + Push Button Bottom",
   "Type": "2 Piece",
   "Size": "1.5\"",
   "Color": "Black"
 },
 {
   "Manufacturer": "Kraken",
   "Model": "w/ Clear Top + Push Button Bottom",
   "Type": "2 Piece",
   "Size": "1.5\"",
   "Color": "Black"
 },
 {
   "Manufacturer": "Cali Crusher",
   "Model": "Cali Crusher 2.0",
   "Type": "4 Piece",
   "Size": "1.85\"",
   "Color": "Black, Blue, Gold, Green, Red"
 },
 {
   "Manufacturer": "Cali Crusher",
   "Model": "Cali Crusher 2.1",
   "Type": "4 Piece",
   "Size": "2.35\"",
   "Color": "Black, Blue, Gold, Green, Red"
 },
 {
   "Manufacturer": "Cali Crusher",
   "Model": "Cali Crusher 2.2",
   "Type": "3 Piece",
   "Size": "1.85\"",
   "Color": "Black, Blue, Gold, Green, Red"
 },
 {
   "Manufacturer": "Cali Crusher",
   "Model": "Cali Crusher 2.3",
   "Type": "3 Piece",
   "Size": "2.35\"",
   "Color": "Black, Blue, Gold, Green, Red"
 },
 {
   "Manufacturer": "Cali Crusher",
   "Model": "Cali Crusher 2.4",
   "Type": "2 Piece",
   "Size": "1.85\"",
   "Color": "Black, Blue, Gold, Green, Red"
 },
 {
   "Manufacturer": "Cali Crusher",
   "Model": "Cali Crusher 2.5",
   "Type": "2 Piece",
   "Size": "2.35\"",
   "Color": "Black, Blue, Gold, Green, Red"
 },
 {
   "Manufacturer": "Cali Crusher",
   "Model": "Homegrown",
   "Type": "4 Piece",
   "Size": "1.85\"",
   "Color": "Light Blue, Black, Blue, Brown, Gray, Gold, Green, Violet, Pink, Red"
 },
 {
   "Manufacturer": "Cali Crusher",
   "Model": "Homegrown",
   "Type": "4 Piece",
   "Size": "2.35\"",
   "Color": "Light Blue, Black, Blue, Brown, Gray, Gold, Green, Violet, Pink, Red"
 },
 {
   "Manufacturer": "Cali Crusher",
   "Model": "Homegrown",
   "Type": "2 Piece",
   "Size": "2.35\"",
   "Color": "Light Blue, Black, Blue, Brown, Gray, Gold, Green, Violet, Pink, Red"
 },
 {
   "Manufacturer": "Cali Crusher",
   "Model": "Original Gansta",
   "Type": "4 Piece",
   "Size": "2\"",
   "Color": "Black, Blue, Gold, Green, Violet, Pink, Red, Silver"
 },
 {
   "Manufacturer": "Cali Crusher",
   "Model": "Original Gansta",
   "Type": "4 Piece",
   "Size": "2.5\"",
   "Color": "Black, Blue, Gold, Green, Violet, Pink, Red, Silver"
 },
 {
   "Manufacturer": "Cali Crusher",
   "Model": "Original Gansta",
   "Type": "2 Piece",
   "Size": "2\"",
   "Color": "Black, Gold, Violet"
 },
 {
   "Manufacturer": "Kannastör",
   "Model": "Multi-Chamber",
   "Type": "Regular",
   "Size": "1.5\"",
   "Color": "Silver + Matte Black"
 },
 {
   "Manufacturer": "Kannastör",
   "Model": "Multi-Chamber",
   "Type": "Regular",
   "Size": "2.5\"",
   "Color": "Silver + Matte Black, Matte Black"
 },
 {
   "Manufacturer": "Kannastör",
   "Model": "Multi-Chamber",
   "Type": "w/ Jar",
   "Size": "2.5\"",
   "Color": "Silver + Matte Black, Matte Black"
 },
 {
   "Manufacturer": "Kannastör",
   "Model": "Multi-Chamber",
   "Type": "w/ Clear Top",
   "Size": "2.5\"",
   "Color": "Silver + Matte Black"
 },
 {
   "Manufacturer": "Kannastör",
   "Model": "Multi-Chamber",
   "Type": "W/ Jar + Clear Top",
   "Size": "2.5\"",
   "Color": "Silver + Matte Black"
 }
];

let grinders = { };
let failsafe = 100;
let count = 0;

while (raw.length > 0 && failsafe > 0) {
  for (let i in raw) {
    let r = raw[i]
    if (grinders[r.Manufacturer] == undefined) {
      grinders[r.Manufacturer] = {};
    }
    if (grinders[r.Manufacturer][r.Model] == undefined) {
      grinders[r.Manufacturer][r.Model] = {};
    }
    if (grinders[r.Manufacturer][r.Model][r.Type] == undefined) {
      grinders[r.Manufacturer][r.Model][r.Type] = {};
    }
    if (grinders[r.Manufacturer][r.Model][r.Type][r.Size] == undefined) {
      grinders[r.Manufacturer][r.Model][r.Type][r.Size] = [];
    } else {
      let colors = r.Color.split(", ")
      grinders[r.Manufacturer][r.Model][r.Type][r.Size] = colors;
      raw.splice(i, 1);
    }
    count++
  }
  failsafe--;
}

console.log('final:', grinders);
console.log('raw:', raw);
console.log('count:', count);
console.log(failsafe);
