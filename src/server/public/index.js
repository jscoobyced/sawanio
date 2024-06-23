let myLastPeerId = null
const currentUserVideoRef = document.getElementById('my-video-id')
const remoteVideoRef = document.getElementById('remote-video-id')
let peerInstance = null

const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

const openConnection = () => {
  const socket = io('/');
  const peer = new Peer(undefined, { path: '/peerjs', host: '/', port: 3443 })
  peer.on('open', (id) => {
    if (myLastPeerId !== null) {
      peer.id = myLastPeerId
    } else if (peer.id !== null) {
      myLastPeerId = peer.id
    } else {
      peer.id = uuidv4()
    }
    document.getElementById('my-peer-id').innerText = peer.id
    socket.emit('join-room', 1, peer.id);
    socket.on('user-connected', (peerId) => {
      console.log(`${peerId} connected to room.`);
      const userElement = document.createElement('li')
      userElement.innerText = `New user connected : ${peerId}`

      const userListElement = document.getElementById('user-list')
      userListElement.appendChild(userElement)
    });
  })

  peer.on('call', (call) => {
    var getUserMedia =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia

    getUserMedia({ video: true, audio: true }, (mediaStream) => {
      currentUserVideoRef.srcObject = mediaStream
      currentUserVideoRef.play()
      call.answer(mediaStream)
      call.on('stream', function (remoteStream) {
        remoteVideoRef.srcObject = remoteStream
        remoteVideoRef.play()
      })
    })
  })
  peerInstance = peer
}

const callRemote = () => {
  const remotePeerId = document.getElementById('remote-peer-id').value
  const getUserMedia =
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia

  getUserMedia({ video: true, audio: true }, (mediaStream) => {
    currentUserVideoRef.srcObject = mediaStream
    currentUserVideoRef.play()

    console.log(`Connecting to ${remotePeerId}`)
    const call = peerInstance.call(remotePeerId, mediaStream)

    call.on('stream', (remoteStream) => {
      remoteVideoRef.srcObject = remoteStream
      remoteVideoRef.play()
    })
  })
}
