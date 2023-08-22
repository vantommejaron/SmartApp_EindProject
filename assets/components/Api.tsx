const url = 'https://64b01bc3c60b8f941af53dbb.mockapi.io/agents/Room'

export const getRoomsByName = async (Name: string) => {
  const response = await fetch(url)
  const data = await response.json()
  const Rooms = data.filter((room: { Name: string }) => room.Name === Name)
  return Rooms
}

export const getRoomById = async (id: string) => {
  const response = await fetch(`${url}/${id}`)
  const data = await response.json()
  return data
}

export const getRoomIdByName = async (roomName: string, name: string) => {
  try {
    const response = await fetch(
      `https://64b01bc3c60b8f941af53dbb.mockapi.io/agents/Room?roomName=${encodeURIComponent(
        roomName,
      )}&name=${encodeURIComponent(name)}`,
    )

    if (response.ok) {
      const data = await response.json()
      if (data.length > 0) {
        const matchingRoom = data.find(
          (room: { roomName: string; Name: string }) =>
            room.roomName === roomName && room.Name === name,
        )
        if (matchingRoom) {
          return matchingRoom.id
        } else {
          console.log('Room not found in the database.')
        }
      }
    } else {
      console.log('Failed to fetch room data.')
      
    }
  } catch (error) {
    console.log('Error getting room ID:', error)
    return null
  }
}

export const checkIfRoomExists = async (
  roomName: string | number | boolean,
) => {
  try {
    const response = await fetch(
      `https://64b01bc3c60b8f941af53dbb.mockapi.io/agents/Room?roomName=${encodeURIComponent(
        roomName,
      )}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    )

    if (response.ok) {
      const data = await response.json()
      return data.length > 0
    } else {
      console.log('Failed to check room existence')
    }
  } catch (error) {
    console.log('Error checking room existence:', error)
    return false
  }
}

export const postData = async (data: any) => {
  const response = await fetch(
    'https://64b01bc3c60b8f941af53dbb.mockapi.io/agents/Room',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    },
  )
  return response
}

export const putData = async (roomId: any, data: any) => {
  const response = await fetch(
    `https://64b01bc3c60b8f941af53dbb.mockapi.io/agents/Room/${roomId}`,
    {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    },
  )
  return response
}

export const deleteRoomById = async (roomId: any) => {
  const response = await fetch(`${url}/${roomId}`, {
    method: 'DELETE',
  })
  return response
}
