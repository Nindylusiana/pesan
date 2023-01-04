function sayHello() {
  const name = document.getElementById("name").value;
  const message = `Hallo ${name} bagaimana kabarmu hari ini? Aku harap kamu baik baik saja. Terimakasih sudah bertahan sampai saat ini, terimakasih sudah mencari alasan untuk tersenyum walaupun kehidupan tidak selalu berjalan baik. Kamu hebat sekali, aku mau bilang kalo nnti jalan yang kamu lalui sedang tidak baik, tolong bertahan lagi. Tidak apa apa kalo belum berhasil, kamu tau apa yang paling penting? Yang paling penting itu adalah dirimu! Kamu sangat berharga terlepas dari apapun hasil yang kamu dapatkan. Aku berharap kamu hidup dengan nyaman, melakukan banyak hal yang kamu suka. jangan pernah membandingkan dirimu dengan orang lain, karna kamu sangat istimewa. waktu setiap orang berbeda, begitupun kamu. I love you dear 🤍 🤍 🤍`;
  document.getElementById("message").innerHTML = message;
}
