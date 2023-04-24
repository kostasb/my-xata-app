import { getXataClient, Posts } from '../xata'

const xata = getXataClient()


export const getServerSideProps = async () => {

  const records: Posts[] = await xata.db.Posts.getMany()

  return {

    props: {

      records: records.map((record) => ({

        ...record,

        pubDate: record.pubDate?.toDateString(),

      })),

    },

  }

}


// Pass the props defined above to the page and map against it

export default function PostsListPage({ records }: { records: Posts[] }) {

  return (

    <>

      <h1>My xata posts</h1>

      {records.map((record: Posts) => (

        <div key={record.id}>

          <h2>{record.title}</h2>

          <p>{record.id}</p>

          <p>{record.body}</p>

          <p>{record.number}</p>

          <p>a new commit</p>

	  <p>{record.float}</p>

        </div>

      ))}

    </>

  )

}
