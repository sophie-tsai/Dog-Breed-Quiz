async function preloadTenDogs() {
  async function fetchTenDogs() {
    const dogPromiseArray = [];
    while (dogPromiseArray.length < 10) {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
        // dogImage.src = data.message;
        dogPromiseArray.push(data);
      } catch (error) {
        console.error(error);
      }
    }
    return await Promise.all(dogPromiseArray);
  }
  const tenDogPromises = await fetchTenDogs();
  const selectedDogImages = tenDogPromises.map((dogElement) => {
    const dogImage = new Image();
    dogImage.src = dogElement.message;
    return dogImage;
  });

  return selectedDogImages;
}

export default preloadTenDogs;
