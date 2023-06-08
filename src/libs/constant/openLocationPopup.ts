export const openLocationPopup = (setState: (newLocation: string) => void) => {
  window.daum.postcode.load(() => {
    const postcode = new window.daum.Postcode({
      oncomplete: function (data) {
        setState(data.address);
      },
    });
    postcode.open();
  });
};
