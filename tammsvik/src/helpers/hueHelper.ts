const hueEndPoint: string = `http://192.168.1.151/api/szgXak31FwYPevwnWrsVqLuJnx0TEL9W-K0cGxG8`;

async function putLamp(action: string, body: any) {
  try {
    let results = await fetch(`${hueEndPoint}/${action}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (results.ok) {
      console.log("yei");
    } else {
      console.log("fail");
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function setLampToColor(lampId: number, color: number) {
  putLamp(`lights/${lampId}/state`, {
    on: true,
    bri: 100,
    alert: "none",
    hue: color,
  });
}

export async function turnOffLamp(lampId: number) {
  putLamp(`lights/${lampId}/state`, {
    on: false,
  });
}
