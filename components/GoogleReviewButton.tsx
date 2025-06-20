import Image from "next/image";

export function GoogleReviewButton() {
  const handleClick = () => {
    window.open(
      "https://www.google.com/search?hl=en-IN&gl=in&q=No.G1a/62,+Nigaran+Green+Energy+Solutions,+Periya+Subbannan+Street,+Saibaba+Colony,+Kuppakonam+Pudur,+K+K+Pudur,+Coimbatore,+Tamil+Nadu+641038&ludocid=6474371972092443514&lsig=AB86z5WefvuV94gnHShLEmomdtIG#lrd=0x3ba8f7059e858ee9:0x59d997018450bb7a,3,,,,", // ← Replace with your actual Google review link
      "_blank"
    );
  };

  return (
    <button onClick={handleClick}>
      <Image
        src="https://turbifycdn.com/ty/cdn/finnstyle/google-button.png" // ← You'll need to download the icon and place it in /public
        alt="Google Review Button - Rate your experience with Nigaran Solar"
        height={100}
        width={100}
        className="w-full h-12 lg:h-20 object-contain transition-transform duration-300 ease-in-out hover:scale-110"
        loading="lazy"
      />
    </button>
  );
}