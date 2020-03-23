var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"el":178,"id":25708,"methods":[{"el":96,"sc":2,"sl":48},{"el":158,"sc":2,"sl":108},{"el":171,"sc":2,"sl":169},{"el":176,"sc":2,"sl":173}],"name":"SwapLeg","sl":32}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_125":{"methods":[{"sl":48},{"sl":169},{"sl":173}],"name":"testLIBORInArrearsFloatLeg","pass":true,"statements":[{"sl":49},{"sl":51},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":71},{"sl":75},{"sl":76},{"sl":77},{"sl":80},{"sl":87},{"sl":88},{"sl":90},{"sl":95},{"sl":170},{"sl":175}]},"test_133":{"methods":[{"sl":48},{"sl":169},{"sl":173}],"name":"testFixLeg","pass":true,"statements":[{"sl":49},{"sl":51},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":71},{"sl":75},{"sl":76},{"sl":84},{"sl":87},{"sl":88},{"sl":90},{"sl":95},{"sl":170},{"sl":175}]},"test_18":{"methods":[{"sl":48},{"sl":169},{"sl":173}],"name":"testLIBORInArrearsFloatLeg","pass":true,"statements":[{"sl":49},{"sl":51},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":71},{"sl":75},{"sl":76},{"sl":77},{"sl":80},{"sl":87},{"sl":88},{"sl":90},{"sl":95},{"sl":170},{"sl":175}]},"test_185":{"methods":[{"sl":108},{"sl":173}],"name":"testFixLeg","pass":true,"statements":[{"sl":109},{"sl":110},{"sl":121},{"sl":122},{"sl":123},{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":129},{"sl":136},{"sl":140},{"sl":141},{"sl":149},{"sl":152},{"sl":154},{"sl":157},{"sl":175}]},"test_196":{"methods":[{"sl":48},{"sl":169},{"sl":173}],"name":"testAgainstSwaption","pass":true,"statements":[{"sl":49},{"sl":51},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":71},{"sl":75},{"sl":76},{"sl":77},{"sl":80},{"sl":84},{"sl":87},{"sl":88},{"sl":90},{"sl":95},{"sl":170},{"sl":175}]},"test_263":{"methods":[{"sl":48},{"sl":169},{"sl":173}],"name":"testExpectedPositiveExposure","pass":true,"statements":[{"sl":49},{"sl":51},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":71},{"sl":75},{"sl":76},{"sl":77},{"sl":80},{"sl":84},{"sl":87},{"sl":88},{"sl":90},{"sl":95},{"sl":170},{"sl":175}]},"test_278":{"methods":[{"sl":48},{"sl":169},{"sl":173}],"name":"testFloatLeg","pass":true,"statements":[{"sl":49},{"sl":51},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":71},{"sl":75},{"sl":76},{"sl":77},{"sl":80},{"sl":87},{"sl":88},{"sl":90},{"sl":95},{"sl":170},{"sl":175}]},"test_348":{"methods":[{"sl":48},{"sl":169},{"sl":173}],"name":"testStochasticCurves","pass":true,"statements":[{"sl":49},{"sl":51},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":71},{"sl":75},{"sl":76},{"sl":77},{"sl":80},{"sl":84},{"sl":87},{"sl":88},{"sl":90},{"sl":95},{"sl":170},{"sl":175}]},"test_368":{"methods":[{"sl":48},{"sl":169},{"sl":173}],"name":"testCMSSpreadLeg","pass":true,"statements":[{"sl":49},{"sl":51},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":71},{"sl":75},{"sl":76},{"sl":77},{"sl":78},{"sl":87},{"sl":88},{"sl":90},{"sl":95},{"sl":170},{"sl":175}]},"test_373":{"methods":[{"sl":48},{"sl":169},{"sl":173}],"name":"testCMSFloatLeg","pass":true,"statements":[{"sl":49},{"sl":51},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":71},{"sl":75},{"sl":76},{"sl":77},{"sl":80},{"sl":87},{"sl":88},{"sl":90},{"sl":95},{"sl":170},{"sl":175}]},"test_449":{"methods":[{"sl":108},{"sl":173}],"name":"testFloatLeg","pass":true,"statements":[{"sl":109},{"sl":110},{"sl":121},{"sl":122},{"sl":123},{"sl":125},{"sl":126},{"sl":127},{"sl":128},{"sl":129},{"sl":136},{"sl":140},{"sl":141},{"sl":142},{"sl":145},{"sl":152},{"sl":154},{"sl":157},{"sl":175}]},"test_484":{"methods":[{"sl":48},{"sl":169},{"sl":173}],"name":"testModelHierarchy","pass":true,"statements":[{"sl":49},{"sl":51},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":71},{"sl":75},{"sl":76},{"sl":77},{"sl":80},{"sl":87},{"sl":88},{"sl":90},{"sl":95},{"sl":170},{"sl":175}]},"test_485":{"methods":[{"sl":48},{"sl":169},{"sl":173}],"name":"testSwap","pass":true,"statements":[{"sl":49},{"sl":51},{"sl":60},{"sl":61},{"sl":62},{"sl":63},{"sl":64},{"sl":71},{"sl":75},{"sl":76},{"sl":77},{"sl":80},{"sl":84},{"sl":87},{"sl":88},{"sl":90},{"sl":95},{"sl":170},{"sl":175}]}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [18, 263, 348, 484, 125, 373, 196, 278, 485, 133, 368], [18, 263, 348, 484, 125, 373, 196, 278, 485, 133, 368], [], [18, 263, 348, 484, 125, 373, 196, 278, 485, 133, 368], [], [], [], [], [], [], [], [], [18, 263, 348, 484, 125, 373, 196, 278, 485, 133, 368], [18, 263, 348, 484, 125, 373, 196, 278, 485, 133, 368], [18, 263, 348, 484, 125, 373, 196, 278, 485, 133, 368], [18, 263, 348, 484, 125, 373, 196, 278, 485, 133, 368], [18, 263, 348, 484, 125, 373, 196, 278, 485, 133, 368], [], [], [], [], [], [], [18, 263, 348, 484, 125, 373, 196, 278, 485, 133, 368], [], [], [], [18, 263, 348, 484, 125, 373, 196, 278, 485, 133, 368], [18, 263, 348, 484, 125, 373, 196, 278, 485, 133, 368], [18, 263, 348, 484, 125, 373, 196, 278, 485, 368], [368], [], [18, 263, 348, 484, 125, 373, 196, 278, 485], [], [], [], [263, 348, 196, 485, 133], [], [], [18, 263, 348, 484, 125, 373, 196, 278, 485, 133, 368], [18, 263, 348, 484, 125, 373, 196, 278, 485, 133, 368], [], [18, 263, 348, 484, 125, 373, 196, 278, 485, 133, 368], [], [], [], [], [18, 263, 348, 484, 125, 373, 196, 278, 485, 133, 368], [], [], [], [], [], [], [], [], [], [], [], [], [185, 449], [185, 449], [185, 449], [], [], [], [], [], [], [], [], [], [], [185, 449], [185, 449], [185, 449], [], [185, 449], [185, 449], [185, 449], [185, 449], [185, 449], [], [], [], [], [], [], [185, 449], [], [], [], [185, 449], [185, 449], [449], [], [], [449], [], [], [], [185], [], [], [185, 449], [], [185, 449], [], [], [185, 449], [], [], [], [], [], [], [], [], [], [], [], [18, 263, 348, 484, 125, 373, 196, 278, 485, 133, 368], [18, 263, 348, 484, 125, 373, 196, 278, 485, 133, 368], [], [], [18, 263, 348, 484, 125, 373, 196, 278, 485, 133, 185, 449, 368], [], [18, 263, 348, 484, 125, 373, 196, 278, 485, 133, 185, 449, 368], [], [], []]