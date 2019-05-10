import React, { useState, useEffect, useRef } from "react";
import { drawCanvas } from "./helpers";

function Canvas(props) {
  const canvas = useRef(null);

  const [time, setTime] = useState({
    time: {
      hours: null,
      minutes: null,
      seconds: null
    }
  });
  // state = {
  //   time: {
  //     hours: null,
  //     minutes: null,
  //     seconds: null
  //   }
  // };

  function createAndSetTime() {
    const d = new Date();
    const hours = d.getHours();
    const minutes = d.getMinutes();
    const seconds = d.getSeconds();

    return setTime({ time: { hours, minutes, seconds } });
  }
  // setTime() {
  //   const d = new Date();
  //   const hours = d.getHours();
  //   const minutes = d.getMinutes();
  //   const seconds = d.getSeconds();

  //   return this.setState({ time: { hours, minutes, seconds } });
  // }

  useEffect(() => {
    createAndSetTime(
      window.setInterval(() => {
        createAndSetTime();
      }, 1000)
    )
  }, [])

  // componentWillMount() {
  //   this.setTime(
  //     window.setInterval(() => {
  //       this.setTime();
  //     }, 1000)
  //   );
  // }

  useEffect(() => {
    const ctx = canvas.current.getContext("2d");
    drawCanvas(
      ctx,
      props,
      time,
      canvas.current.width
    );
    return () => {
      ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
    }
  });

  // componentDidMount() {
  //   this.ctx = this.refs.canvas.getContext("2d");
  //   drawCanvas(
  //     this.ctx,
  //     this.props,
  //     this.state.time, // { hours, minutes, seconds }
  //     this.refs.canvas.width
  //   );
  // }

  // componentDidUpdate(prevProps) {
  //   this.ctx.clearRect(0, 0, this.refs.canvas.width, this.refs.canvas.height);
  //   drawCanvas(
  //     this.ctx,
  //     this.props,
  //     this.state.time, // { hours, minutes, seconds }
  //     this.refs.canvas.width
  //   );
  // }

  return <canvas ref={canvas} width={250} height={250} />;
}

export default Canvas;
