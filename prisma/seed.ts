import prisma from "./database"

const main = async () => {
    await prisma.user.create({
        data: {
            email: "admin@scm.com",
            role: 'ADMIN',
            id: process.env.UID_ADMIN,
            profile: {
                create: {
                    name: 'Admin'
                }
            }
        }
    })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    }).catch(async e => {
        console.error(e)
        await prisma.$disconnect()
    })