interface ProfileProps {
  params: Promise<{ userId: string }>,
}

export async function Profile({ params }: ProfileProps) {
  const userId = (await params).userId;
  return <h1>Melihat profile user {userId}</h1>;
}