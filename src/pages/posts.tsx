import { getXataClient, Databases } from '../xata'

const xata = getXataClient()


export const getServerSideProps = async () => {

  const records: Posts[] = await xata.db.databases.getMany()

  return {

    props: {

      records: records.map((record) => ({

        ...record,

      })),

    },

  }

}


// Pass the props defined above to the page and map against it

export default function PostsListPage({ records }: { records: Posts[] }) {

  return (

    <>

      <h1>My xata databases</h1>

      {records.map((record: Posts) => (

        <div key={record.id}>

          <h2>{record.workspace_id}</h2>

          <p>{record.database_name}</p>

          <p>{record.branch_name}</p>

        </div>

      ))}

    </>

  )

}
