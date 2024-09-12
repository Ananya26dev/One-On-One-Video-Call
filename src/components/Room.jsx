import React, { useEffect, useRef } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useParams } from "react-router-dom";
const Room = () => {
  const { id } = useParams();
  const meetingContainerRef = useRef(null);
  useEffect(() => {
    const myMeeting = async () => {
      const appID = 1372886484;
      const serverSecret = "b6932d27e0f2ad682eebd083fe4a75fc";
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        id,
        Date.now().toString(),
        "Coding With Ananya"
      );
      const zp = ZegoUIKitPrebuilt.create(kitToken);
      // start the call
      zp.joinRoom({
        container: meetingContainerRef.current,
        sharedLinks: [
          {
            name: "Personal link",
            url: `http://127.0.0.1:5173/room/${id}`,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall,
        },
      });
    };
    myMeeting();
  }, [id]);
  return (
    <div
      className="myCallContainer"
      ref={meetingContainerRef}
      style={{ width: "100vw", height: "100vh" }}
    ></div>
  );
};

export default Room;
