export default async function TimePage() {
  const timeRequest = await fetch('https://timezone.abstractapi.com/v1/current_time/?api_key=225217e644514749924330c98d12178d&location=Oxford, United Kingdom', {
    next: { revalidate: 10 }
    // cache: 'no-store'
  });
  const time = await timeRequest.json();

  console.log('time', time);

  return <div>Current timestamp: {time?.datetime}</div>
}