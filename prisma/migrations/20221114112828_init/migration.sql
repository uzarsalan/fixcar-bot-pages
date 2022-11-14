-- CreateTable
CREATE TABLE "postgress_sessions" (
    "id" TEXT NOT NULL,
    "session" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "telegramId" BIGINT,
    "firstName" TEXT,
    "lastName" TEXT,
    "middleName" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "authorId" INTEGER NOT NULL,
    "carId" INTEGER NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Answer" (
    "id" SERIAL NOT NULL,
    "marketId" INTEGER NOT NULL,
    "postId" INTEGER NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "message" TEXT NOT NULL,
    "availability" TEXT NOT NULL,

    CONSTRAINT "Answer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Car" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER,
    "grz" TEXT,
    "vin" TEXT,
    "data" JSONB NOT NULL,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Market" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "location" JSONB NOT NULL,

    CONSTRAINT "Market_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "postgress_sessions_id_key" ON "postgress_sessions"("id");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_marketId_fkey" FOREIGN KEY ("marketId") REFERENCES "Market"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answer" ADD CONSTRAINT "Answer_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "Car_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
