module.exports = {
    verifyConditions: [
        "@semantic-release/changelog",
        "@semantic-release/npm",
        "@semantic-release/git",
        "@semantic-release/github"
    ],
    prepare: [
        "@semantic-release/changelog",
        "@semantic-release/npm",
        "@semantic-release/git"
    ]
};
