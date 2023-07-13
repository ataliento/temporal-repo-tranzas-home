import React from "react";
import { render } from "@testing-library/react";

import { adapterHomeBanner } from "adapters/banner";
import Banner from "@/components/Banner";

const MOCK_BANNER = {
  image_banner: "https://componentesui.blob.core.windows.net/imgs/feed_pymes/banner_feed.png",
  title_banner: "Andreani envíos",
  button_banner: {
    link: {
      id: "",
      url: "https://pymes.andreani.com/hacer-envio/andreani-env%C3%ADos?paso=origen",
      linktype: "url",
      fieldtype: "multilink",
      cached_url: "https://pymes.andreani.com/hacer-envio/andreani-env%C3%ADos?paso=origen",
    },
    text: "Ir al servicio",
  },
  subtitle_banner:
    "Con Andreani envíos podrás enviar un link a tu destinatario para que complete sus datos y abone el envío.",
};

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/status",
      pathname: "/status",
      query: "",
      asPath: "",
      back: () => {
        return "/status";
      },
    };
  },
}));

describe("<Banner/>", () => {
  it("Should render initial State without crash", () => {
    const { asFragment } = render(<Banner {...adapterHomeBanner(MOCK_BANNER)} />);

    expect(asFragment()).toMatchSnapshot();
  });
  it("Should render with title", () => {
    const { getByText } = render(<Banner {...adapterHomeBanner(MOCK_BANNER)} />);

    expect(getByText(MOCK_BANNER.title_banner)).toMatchSnapshot();
  });
});
