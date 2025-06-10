"use client";

export default function RippleBackground() {
  return (
    <div
      className="ripple-background bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))]

from-[#58b03f]
via-[#539c3f]
to-[#325927]"
    >
      <div className="circle xxlarge shade1" />
      <div className="circle xlarge shade2" />
      <div className="circle large shade3" />
      <div className="circle medium shade4" />
      <div className="circle small shade5" />
    </div>
  );
}
