
interface ButtonProps {
  content: string,
  onClick: () => void
}

export default function Button({ content, onClick }: ButtonProps) {
  return (
    <button className="px-4 py-2 bg-blue-500 text-white rounded-full" onClick={onClick}>
      {content}
    </button>
  )
}