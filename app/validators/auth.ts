import vine from '@vinejs/vine'


export const pessoaValidator = vine.compile(
    vine.object({
        apelido: vine.string().maxLength(32).unique(async (db, value) => {
            const match = await db.from('users').select('id').where('apelido', value).first()

            return !match
        }),
        nome: vine.string().maxLength(100),
        nascimento: vine.string().maxLength(10),
        stack: vine.array(vine.string().maxLength(32))
    })
)