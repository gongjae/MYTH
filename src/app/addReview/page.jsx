'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AddReview() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const router = useRouter()
  const apiUrl = process.env.API_URL
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!title || !description) {
      alert('리뷰를 등록해주세요')
      return // 리뷰가 비어있는 경우 바로 종료
    }
    try {
      const res = await fetch(`${apiUrl}/api/reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // 오타 수정
        },
        body: JSON.stringify({ title, description }),
      })
      if (res.ok) {
        router.reload() // 또는 router.push('/')를 사용할 수 있습니다.
      } else {
        throw new Error('리뷰를 등록하는 데 실패하였습니다')
      }
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="border border-slate-500 p-4"
        type="text"
        placeholder="Review Title"
      />
      <textarea
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="border border-slate-500 p-4 h-32"
        type="text"
        placeholder="Review Description"
      />
      <button
        type="submit"
        className="bg-green-800 text-white font-bold px-6 py-3 w-fit rounded-md"
      >
        리뷰 추가하기
      </button>
    </form>
  )
}
